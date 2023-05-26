export default function handler(req, res) {
  res.status(200).json(process.env.NEXT_PUBLIC_SOME_ENV_VAR)
}