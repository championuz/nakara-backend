const mongoose = require('mongoose')

const BuyCryptoSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true
    },
    name: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    walletAddress: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean, 
      enum: [false, true],
      default: false
    }
  }, 
  {collection: 'buyRequests'},
  {timestamps: true}
)

module.exports = mongoose.model('buyRequest', BuyCryptoSchema)