<script>
import axios from 'axios';

export default {
    name: 'Contact',
    data() {
        return {
            email: '',
            name: '',
            object: '',
            message: '',
            errors: {},
            isLoading: false,
        };
    },
    methods: {
        SendForm() {
            const data = {
                email: this.email,
                name: this.name,
                object: this.object,
                message: this.message,
            };
            this.isLoading = true;
            axios.post('http://127.0.0.1:8000/api/contacts', data).then((result) => {
                this.isLoading = false;
                if (!result.data.success) {
                    this.errors = result.data.errors;
                    console.log(this.errors);
                } else {
                    this.email = '';
                    this.name = '';
                    this.object = '';
                    this.message = '';
                    this.errors = {};
                }
            });
        },
    },
};
</script>

<template>
    <form @submit.prevent="SendForm()">
        <div>
            <input
                class="form-control"
                :class="{ 'is-invalid': errors.email }"
                v-model.trim="email"
                type="text"
                placeholder="Email"
            />
            <p v-for="(error, index) in errors.email" :key="'email' + index" class="invalid-feedback">{{ error }}</p>
        </div>
        <div>
            <input
                class="form-control"
                :class="{ 'is-invalid': errors.name }"
                v-model.trim="name"
                type="text"
                placeholder="Name"
            />
            <p v-for="(error, index) in errors.name" :key="'name' + index" class="invalid-feedback">{{ error }}</p>
        </div>
        <div>
            <input
                class="form-control"
                :class="{ 'is-invalid': errors.object }"
                v-model.trim="object"
                type="text"
                placeholder="Object"
            />
            <p v-for="(error, index) in errors.object" :key="'object' + index" class="invalid-feedback">{{ error }}</p>
        </div>
        <div>
            <textarea
                class="form-control"
                :class="{ 'is-invalid': errors.message }"
                v-model.trim="message"
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
            ></textarea>
            <p v-for="(error, index) in errors.message" :key="'message' + index" class="invalid-feedback">
                {{ error }}
            </p>
        </div>
        <button type="submit" :disabled="isLoading">{{ isLoading ? 'In corso...' : 'Send' }}</button>
    </form>
</template>

<style lang="scss" scoped></style>
