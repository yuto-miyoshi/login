/* ログイン情報 */
CREATE TABLE login_time (
  id SERIAL,
  user_id INTEGER REFERENCES users(id),
  login_time timestamp NOT NULL,

  PRIMARY KEY (id)
);