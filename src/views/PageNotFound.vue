<template>
  <div class="error-wrapper">
    <h1>404</h1>
    <h3>ХММ... Страница не найдена!</h3>
    <p>
      Извините, но страница на которую вы хотели попасть, не существует.
      Возможно она была перемещена, удалена или переименована. А, может быть,
      она просто временно недоступна и на нее надо зайти позже
    </p>

      <v-btn rounded @click="$router.push('/')">
        <v-icon left class="fas fa-home mb-1"></v-icon>
        Вернутся на главную
      </v-btn>

  </div>
</template>

<style lang="scss" scoped>
.error-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #411c47;
}
h1 {
  font-size: 120px;
}
</style>
