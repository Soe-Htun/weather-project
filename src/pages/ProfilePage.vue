<template>
  <div class="profile-container">
    <div class="profile-body">
      <div class="header-content">
        <Back is-update />
        <p class="text-lg font-bold">Edit Profile</p>
        <p></p>
      </div>

      <div class="profile-header"></div>
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
        <BaseInput label="Full Name" v-model="editedUser.name" :readonly="!isEditing"
        :error="v$.name.$errors.length? v$.name.$errors[0].$message : ''" 
        />
        <BaseInput label="Email" type="email" v-model="editedUser.email" :readonly="!isEditing"
          :error="v$.email.$errors.length? v$.email.$errors[0].$message: '' " 
        />
        <BaseInput label="Phone Number" type="tel" v-model="editedUser.phone" :readonly="!isEditing"
          :error="v$.phone.$errors.length? v$.phone.$errors[0].$message : '' " 
        />
      </div>

      <div class="footer">
        <button class="action-btn" @click="toggleEditing">
          {{ isEditing ? "SUBMIT" : "EDIT" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/auth";
import Back from "../components/Atoms/Back.vue";
import Icons from "../components/Atoms/Icons.vue";
import BaseInput from "../components/Atoms/BaseInput.vue";
import { useToast } from "../composables/useToast";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const isEditing = ref(false);
const editedUser = ref({ ...user.value });

const { toaster } = useToast();
const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage("Name is required", required)
    },
    email: {
      required: helpers.withMessage("Email is required", required),
      email: helpers.withMessage("Invalid email format", email),
    },
    phone: {
      required: helpers.withMessage("Phone is required", required),
      minLength: helpers.withMessage("Phone must be at least 10 characters", minLength(10)),
    },
  }
})
const v$ = useVuelidate(rules, editedUser);

const toggleEditing = async() => {
  if (isEditing.value) {
    const isValid = await v$.value.$validate()
    if(!isValid) {
      // toaster("error", "Please fill out the required fields correctly")
      return
    }
    user.value = { ...editedUser.value };
    toaster("success", 'Successfully updated profile');
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

.profile-header {
  max-width: 768px;
  width: 100%;
  height: 138px;
  background: linear-gradient(to bottom, #f0f4ff 100%, white 100%);
  border-bottom-left-radius: 50% 50px;
  border-bottom-right-radius: 50% 50px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%); 
  z-index: -1;
}

.profile-container {
  padding: 0px;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
}
.profile-body {
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
}

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
.input-container {
  flex-grow: 1;
  margin-top: 20px;
  width: 100%;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: calc(100% - 40px);
  max-width: 768px;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
}

.action-btn {
  background-color: #1d1d42;
  color: white;
  width: 100%;
  padding: 17px 12px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

.action-btn:hover {
  opacity: 0.9;
}
</style>
