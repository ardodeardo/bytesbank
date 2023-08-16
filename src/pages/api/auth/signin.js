// ref => https://hygraph.com/blog/nextjs-authentication

import { withIronSessionApiRoute } from "iron-session/next";
import { GraphQLClient, gql } from "graphql-request";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const {
  COOKIE_NAME,
  COOKIE_PASSWORD,
  HYGRAPH_CONTENT_URL,
  HYGRAPH_PERMANENT_AUTH_TOKEN,
  JWT_SECRET,
} = process.env;

const cookie = {
  cookieName: COOKIE_NAME,
  password: COOKIE_PASSWORD,
  cookieOptions: { secure: process.env.NODE_ENV === "production" },
};

const client = new GraphQLClient(HYGRAPH_CONTENT_URL, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_PERMANENT_AUTH_TOKEN}`,
  },
});

const getUserByEmailQuery = gql`
  query getUserByEmailQuery($email: String!) {
    bytesUser(where: { email: $email }, stage: DRAFT) {
      id
      email
      password
    }
  }
`;

const updateUserMutation = gql`
  mutation updateUser(
    $where: BytesUserWhereUniqueInput!
    $data: BytesUserUpdateInput!
  ) {
    updateBytesUser(data: $data, where: $where) {
      token
      email
    }
  }
`;

export default withIronSessionApiRoute(
  async function signIn(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).end();

      return;
    }

    const getUserResponse = await client.request(getUserByEmailQuery, { email });
    const { nextUser } = getUserResponse;

    if (!nextUser) {
      res.status(400).end();

      return;
    }

    const { password: hashedPassword } = nextUser;
    const isMatch = await bcrypt.compare(password, hashedPassword);

    if (!isMatch) {
      res.status(400).end();

      return;
    }

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: 36005 });
    const updateUserResponse = await client.request(updateUserMutation, {
      where: { email },
      data: { token },
    });

    const { updateNextUser } = updateUserResponse;

    if (!updateNextUser?.token) {
      res.status(500).end();

      return;
    }

    req.session.user = {
      token: updateNextUser.token,
    };

    await req.session.save();

    res.status(200).json({ token: updateNextUser.token });
  },
  cookie
);
