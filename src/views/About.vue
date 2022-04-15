<template>
  <div class="about">
    <h1 class="font-3xl font-bold">Hello World</h1>
    <p>{{ user }}</p>
  </div>
</template>

<script>
export default {
  name: "About",
  async setup() {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        console.log('Success')
        resolve('Success')
      }, 5000)
    })

    const user = await promise

    return {
      user
    }
  }
};
</script>
