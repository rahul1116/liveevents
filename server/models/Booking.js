const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    entity: { type: String, required: true },
    eventId: { type: Schema.Types.ObjectId, ref: "Events" },
    attendeeId: { type: Schema.Types.ObjectId, ref: "Users" },
    promocode: { type: String },
    quantityOfTickets: { type: Number, required: true },
    bookingStatus: { type: String, required: true },
    isFree: { type: Boolean, required: true },
    eventAmountInfo: {
        baseAmount: { type: Number, required: true },
        taxInfo: [
            {
                taxName: { type: String, required: true },
                taxAmount: { type: Number, required: true }
            }
        ],
        totalAmount: { type: Number, required: true },
        discountedAmount: { type: Number }
    }
    // ! You still have to add the Team object in here
});

module.exports = mongoose.model("Booking", bookingSchema);
