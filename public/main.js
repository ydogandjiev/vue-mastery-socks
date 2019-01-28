var product = "Socks";

var app = new Vue({
  el: "#app",
  data: {
    brand: "Vue Mastery",
    product: "Socks",
    selectedVariant: 0,
    altText: "A pair of socks",
    link: "https://www.bing.com",
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: './assets/vmSocks-green.png',
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: './assets/vmSocks-blue.png',
        variantQuantity: 0
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function () {
      if (this.variants[this.selectedVariant].variantQuantity > 0) {
        this.variants[this.selectedVariant].variantQuantity -= 1
        this.cart += 1
      }
    },
    removeFromCart: function () {
      if (this.cart > 0) {
        this.variants[this.selectedVariant].variantQuantity += 1
        this.cart -= 1
      }
    },
    updateProduct: function (index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title: function() {
      return this.brand + " " + this.product
    },
    image: function () {
      return this.variants[this.selectedVariant].variantImage
    },
    inventory: function () {
      return this.variants[this.selectedVariant].variantQuantity
    },
    inStock: function () {
      return this.variants[this.selectedVariant].variantQuantity > 0
    }
  }
});
