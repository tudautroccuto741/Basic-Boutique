const userSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  role: {
    type: String,
    default: "customer"
  },
  created: {
    type: String,
    default: Date.now
  },
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "productseo",
          required: true
        },
        quantity: { type: Number }
      }
    ],
    sum: {
      type: Number,
      default: 0
    }
  },
 
  productNewOrder:{
    order:[],
    fullname:{
      type: String,
    },
    mobilenumber:{
      type: String,
    },
    address:{
      type: String,
    },
    createdOrder:{
      type: String,
    },
    Note:{
      type: String,
    },
    status:{
      type: String,
      default: 'Pending',
    }
  },
});