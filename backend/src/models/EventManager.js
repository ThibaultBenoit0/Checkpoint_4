const AbstractManager = require("./AbstractManager");

class EventManager extends AbstractManager {
  constructor() {
    super({ table: "event" });
  }

  insert(event) {
    return this.database.query(
      `insert into ${this.table} (title, date, time, place, description, img, link, price) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        event.title,
        event.date,
        event.time,
        event.place,
        event.description,
        event.img,
        event.link,
        event.price,
      ]
    );
  }

  update(event) {
    const { id } = event;
    return this.database.query(
      `update ${this.table} set title = ?, date = ?, time = ?, place = ?, description = ?, img = ?, link = ?, price = ? where id = ?`,
      [
        event.title,
        event.date,
        event.time,
        event.place,
        event.description,
        event.img,
        event.link,
        event.price,
        id,
      ]
    );
  }
}

module.exports = EventManager;
