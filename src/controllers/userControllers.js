import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const { name, username, email, password, password2, location } = req.body;
  const pageTitle = "Join";
  if (password !== password2) {
    return res.render("join", {
      pageTitle,
      errorMessage: "Password confirmation does not match.",
    });
  }
  const usernameExists = await User.exists({ $or: [{ username }, { email }] });
  if (usernameExists) {
    return res.render("join", {
      pageTitle,
      errorMessage: "This username/email is already taken.",
    });
  }

  await User.create({
    name,
    username,
    email,
    password,
    location,
  });
  res.redirect("/login");
};
export const edit = (req, res) => res.send("edit");
export const remove = (req, res) => res.send("delete");
export const login = (req, res) => res.send("login");
export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("see");
