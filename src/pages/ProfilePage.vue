<template>
  <div class="profile-container">
    <div class="header-content">
      <Back is-update />
      <p class="text-lg font-bold">Edit Profile</p>
      <p></p>
    </div>

    <div class="avatar-wrapper">
      <img src="../assets/img/user_profile.png" alt="Profile" class="avatar" />
      <div v-if="isEditing" class="edit-icon">
        <Icons name="edit" />
      </div>
    </div>

     <div class="user-info">
        <p class="fw-600 text-md m-0 mt-1">{{ user.name }}</p>
        <p class="text-sm">{{ user.email }} | {{ user.phone }}</p>
     </div>
    
    <div class="input-container">
      <BaseInput label="Full Name" v-model="editedUser.name" :readonly="!isEditing" />
      <BaseInput label="Email" type="email" v-model="editedUser.email" :readonly="!isEditing" />
      <BaseInput label="Phone Number" type="tel" v-model="editedUser.phone" :readonly="!isEditing" />
    </div>

    <div class="footer">
      <button class="action-btn" @click="toggleEditing">
        {{ isEditing ? "SUBMIT" : "EDIT" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/auth";
import Back from "../components/Atoms/Back.vue";
import Icons from "../components/Atoms/Icons.vue";
import BaseInput from "../components/Atoms/BaseInput.vue";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const isEditing = ref(false);
const editedUser = ref({ ...user.value });

const toggleEditing = () => {
  if (isEditing.value) {
    user.value = { ...editedUser.value };
  } else {
    editedUser.value = { ...user.value };
  }
  isEditing.value = !isEditing.value;
};
</script>

<style scoped>
html, body {
  width: 100vw;
  overflow-x: hidden;
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.profile-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  max-width: 500px; /* Prevent extra-wide layouts */
  margin: 0 auto; /* Center on large screens */
}

/* Avatar Styling */
.avatar-wrapper {
  position: relative;
  display: inline-block;
  margin: 0 auto;

}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
.edit-icon {
  position: absolute;
  bottom: 2px;
  right: 3px;
  background: white;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

}
.user-info {
  text-align: center;
}
/* Input Fields */
.input-container {
  flex-grow: 1;
  margin-top: 20px;
  width: 100%;
}

/* Sticky Footer Button */
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: calc(100% - 40px);
  background: white;
  max-width: 500px; /* Match container */
  left: 50%;
  transform: translateX(-50%); /* Center button */
  padding: 20px;
}

.action-btn {
  background-color: #1d1d42;
  color: white;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.action-btn:hover {
  opacity: 0.9;
}
</style>
