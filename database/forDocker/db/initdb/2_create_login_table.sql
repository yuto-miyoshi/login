/* ログイン情報 */
CREATE TABLE login (
  users_id INTEGER REFERENCES users(id),
  login_date DATE NOT NULL,

  PRIMARY KEY (users_id, login_date)
);