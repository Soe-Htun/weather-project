<template>
  <div>
    <header class="header">
      <div class="header-content">
        <h1 class="text-2xl leading-1">Weather</h1>
        <RouterLink to="/profile" class="mr-3">
          <img
            src="../../assets/img/profile.svg"
            alt="Profile Icon"
          />
        </RouterLink>
      </div>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  max-width:600px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
