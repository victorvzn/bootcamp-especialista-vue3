<template>
  <div class="container">

    <article class="grid mt-100">
      <div></div>
      <div>
        <hgroup>
          <h1>Register</h1>
          <h2>Ingresa tus datos para registrarte</h2>
        </hgroup>

        <form>
          <BaseInput
            label="Fullname"
            type="text"
            name="fullname"
            placeholder="Fullname"
            required
          />

          <BaseInput
            label="Email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          
          <BaseInput
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          <BaseButton
            type="submit"
            class="contrast"
            label="Register"
          />
        </form>
      </div>
      <div></div>
    </article>

  </div>
</template>

<style scoped>
.mt-100 {
  margin-top: 100px;
}
</style>