/* ユーザー情報 */
CREATE TABLE users (
  id SERIAL,
  mail VARCHAR(255) NOT NULL,
  pass_word VARCHAR(255) NOT NULL,

  PRIMARY KEY (id)
);
