<template>
 
    <div
      v-motion
      :initial="initial"
      :enter="enter"
    >
    <h1>Download</h1>
    </div>
  </template>
  
  <script setup>
  const initial = ref({
    y: 100,
    opacity: 0,
  })
  
  const enter = ref({
    y: 0,
    opacity: 1,
  })
  </script>