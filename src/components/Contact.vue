<template>
  <div>
    <v-container class="supra-contact__form d-flex justify-center align-center">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation        
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Imię"
          required
        ></v-text-field>
        <v-text-field
          v-model="lastName"
          :counter="10"
          :rules="nameRules"
          label="Nazwisko"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-select
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="Osoba fizyczna / Firma"
          required
          class="mb-10"
        ></v-select>

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'Zaakceptuj żeby wysłać.']"
          label="Wyrażam zgodę na przetwarzane moich danych osobowych."
          required
          class="mb-10"
        ></v-checkbox>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Wyślij
        </v-btn>

        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          Wyczyść formularz
        </v-btn>
      </v-form>
    </v-container>
    <v-container class="supra-contact__data d-flex justify-center my-10">
      <v-card
        class="d-flex flex-column justify-space-around align-center pa-12"
        width="50vw"
      >
        <v-card-subtitle class="pb-4 subtitle-1">Supra Finanse</v-card-subtitle>

        <v-card-text class="text--primary text-h5">
          <p>Arkadiusz Sztaba</p>
          <p>ul. Bogata 100</p>
          <p>50-555 Wrocław</p>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="blue darken-2"
            outlined
            href="mailto:#"
          >
            Wyślij maila
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Contact", 
   data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Uzupełnij pole',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Uzupełnij email',
        v => /.+@.+\..+/.test(v) || 'Email musi być prawidłowy',
      ],
      select: null,
      items: [
        'Osoba fizyczna',
        'Firma'
      ],
      checkbox: false,
      lazy: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>