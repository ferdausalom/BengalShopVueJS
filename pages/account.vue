<template>
  <div class="container m-16 p-2 lg:p-10 border border-gray-200 rounded-lg">
    <div>
      <h2 class="text-2xl">Register Now</h2>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" 
        @submit.prevent="checkForm"
        novalidate="true"
      >
        <p v-if="errors.length" class="mb-8">
          <b class="text-yellow-600">Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" :key="error" class="text-red-600 mt-1 italic">{{ error }}</li>
          </ul>
        </p>
        <div v-if="success" class="mb-8">
          <p class="text-2xl text-green-600">Thank you</p>
          <p class="text-gray-600 italic">Your account has been created. We will send you an email about your account info!</p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username <span class="text-red-500">*</span>
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username"
          id="name"
          v-model="name"
          name="name"
          >
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email <span class="text-red-500">*</span>
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email"
          id="email"
          v-model="email"
          type="email"
          name="email"
          >
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password <span class="text-red-500">*</span>
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password" 
          v-model="password"
          type="password"
          name="password" 
          placeholder="******************">
          <!-- <p class="text-red-500 text-xs italic">Please enter a password.</p> -->
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-green-600 hover:bg-green-800 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
          type="submit">
            Register
          </button>
          <!-- <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'account',
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      password: null,
      success: false
    }
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];
      this.success = false;

      if (!this.name) {
        this.errors.push("Name is required.");
      } else if(this.name.length < 4 || this.name.length > 30) {
        this.errors.push("Name must be between 4-30 characters.");
      } else if (!this.validName(this.name)) {
        this.errors.push('Name must be among (a-z) characters.');
      }
      if (!this.email) {
        this.errors.push('Email is required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Email is not valid.');
      }
      if (!this.password) {
        this.errors.push("Password is required.");
      } else if(this.password.length < 6) {
        this.errors.push("Password should be at least 6 characters.");
      }

      if (!this.errors.length) {
        this.success = true;
        this.name = null;
        this.email = null;
        this.password = null;
        return false;
      }

      e.preventDefault();
    },
    validName: function(name) {
      var preM = /^[A-Za-z\s]+$/;
      return preM.test(name)
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
}
</script>
