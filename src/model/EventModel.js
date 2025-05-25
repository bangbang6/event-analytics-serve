/**
 * @description event 数据 model
 * @author 双越
 */

const mongoose = require("../db/mongoose");

const schema = mongoose.Schema(
  {
    eventKey: String,
    eventData: {
      pv: Number,
      uv: Number,
    },
    eventDate: Date,
  },
  { timestamps: true }
);

const EventModel = mongoose.model("eventAnalyticsData", schema);

module.exports = EventModel;
