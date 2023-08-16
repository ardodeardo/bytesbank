// ref => https://hygraph.com/blog/nextjs-authentication

import { GraphQLClient, gql } from "graphql-request";
import jwt from "jsonwebtoken";

const { HYGRAPH_CONTENT_URL, HYGRAPH_PERMANENT_AUTH_TOKEN, JWT_SECRET } =
  process.env;

const client = new GraphQLClient(HYGRAPH_CONTENT_URL, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_PERMANENT_AUTH_TOKEN}`,
  },
});

const getUserByEmailQuery = gql`
  query getUserByEmailQuery($email: String!) {
    bytesUser(where: { email: $email }, stage: DRAFT) {
      email
      firstname
      lastname
    }
  }
`;

export default async function GetAuthenticatedUser(req, res) {
  const defaultReturnObject = { authenticated: false, user: null };

  try {
    const token = String(req?.headers?.authorization?.replace("Bearer ", ""));
    const decoded = jwt.verify(token, JWT_SECRET);
    const getUserResponse = await client.request(getUserByEmailQuery, {
      email: decoded.email,
    });
    const { bytesUser } = getUserResponse;

    if (!bytesUser) {
      res.status(400).json(defaultReturnObject);

      return;
    }

    res.status(200).json({ authenticated: true, user: bytesUser });
  } catch (err) {
    console.log("GetAuthenticatedUser, something went wrong", err);
    res.status(400).json(defaultReturnObject);
  }
}
