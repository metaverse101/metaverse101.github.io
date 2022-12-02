<template>
  <v-dialog
      v-model="dialog"
  >
    <template v-slot:activator="{ props }">
      <v-btn  v-bind="props" >Read More</v-btn>
    </template>

    <v-card>
      <v-card-text>
        <p>
          <slot />
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn block @click="$emit('close')">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "metaverse-dialog",
  data() {
    return {
      dialog: this.dialog,
    }
  },
  props: {
    dialog: {
      type: Boolean,
      required: true,
      default: false,
    }
  }
}
</script>