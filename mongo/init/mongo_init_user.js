var users = [
  {
    user: "readUser",
    pwd: "teama",
    roles: [
      {
        role: "read",
        db: "testdb"
      }
    ]
  },
  {
    user: "owner",
    pwd: "teama",
    roles: [
      {
        role: "dbOwner",
        db: "testdb"
      }
    ]
  }
];

for (var i = 0, length = users.length; i < length; ++i) {
  db.createUser(users[i]);
}
