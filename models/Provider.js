var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ProviderSchema = new Schema({
    // `name` must be unique and of type String
    name: {
        type: String,
        required: false
    },
    // 
    //   activeLicense: {
    //       type: Boolean,
    //     required: false
    //   },
    activeDate: {
        type: Date,
        required: false
    },
    expireDate: {
        type: Date,
        required: false

    },
    issueState: {
      type: String,
      required: false
    },
    license: {
        type: Schema.Types.ObjectId,
        ref: "License"
    },
    
    //   supervisionReq: {
    //     type: Boolean,
    //     required: false
    // },

    // if supervision is required, the provider should have an attached supervisor with an id in the database:
    supervisor: {
        type: Schema.Types.ObjectId,
        ref: "Supervisor"
    },



});

// // This creates our model from the above schema, using mongoose's model method
var Provider = mongoose.model("Provider", ProviderSchema);

// // Export the Provider model
// 
module.exports = Provider