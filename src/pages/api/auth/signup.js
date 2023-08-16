// ref => https://hygraph.com/blog/nextjs-authentication

import { GraphQLClient, gql } from "graphql-request";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const {
  HYGRAPH_CONTENT_URL,
  HYGRAPH_PERMANENT_AUTH_TOKEN,
  JWT_SECRET,
  JWT_EXPIRES_IN,
} = process.env;

const client = new GraphQLClient(HYGRAPH_CONTENT_URL, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_PERMANENT_AUTH_TOKEN}`,
  },
});

const CreateBytesUserMutation = gql`
  mutation CreateBytesUser($userData: BytesUserCreateInput!) {
    createBytesUser(data: $userData) {
      id
      email
      token
    }
  }
`;

export default async function handler(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).end();
  }

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  const hashedPassword = await bcrypt.hash(password, 8);
  const userData = {
    email,
    password: hashedPassword,
    token
  };

  const response = await client.request(CreateBytesUserMutation, { userData });

  if (!response?.CreateBytesUser?.id) {
    res.status(500);
  }

  res.status(200).json({ token });
}
