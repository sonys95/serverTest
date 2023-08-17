const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "kdt",
  password: "12345678!",
  database: "kdt8",
});
conn.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("connect");
});

exports.post_signup = (data, callback) => {
  const query = `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("post_signup", rows);
    callback(rows);
  });
};

exports.post_signin = (data, callback) => {
  const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}' `;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("post_signin", rows);
    callback(rows);
  });
};

exports.post_profile = (data, callback) => {
  const query = `SELECT * FROM user WHERE userid='${data.profile}'`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("post_profile", rows);
    callback(rows);
  });
};

exports.edit_profile = (data, callback) => {
  const query = `UPDATE user SET userid='${data.userid}', pw='${data.pw}', name='${data.name}' WHERE id=${data.id}`;
  conn.query(query, (err, rows) => {
    callback();
  });
};

exports.delete_profile = (id, callback) => {
  const query = `DELETE FROM user WHERE id=${id}`;
  conn.query(query, (err, rows) => {
    callback();
  });
};
