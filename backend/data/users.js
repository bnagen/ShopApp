import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Lebron James",
    email: "lebron@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "ADisney",
    email: "ADisney@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
]

export default users
