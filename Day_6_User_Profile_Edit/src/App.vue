<template>
<div v-show="!isEditMode" >
        <h1>User Profile</h1>
        <img :src="image" alt="User Profile">
        <span>Name :</span><b id="name">{{ name }}</b>
        <hr>

        <span>Email :</span><b id="email">{{ email }}</b>
        <hr>

        <span>Interest :</span><b id="interest" >{{ interest }}</b>
        <hr>

        <button @click="handleEditProfile()">Edit Profile</button>
    </div>
    <div v-show="isEditMode" >
        <h1>User Profile</h1>
        <img :src="image" alt="User Profile">
        <span>Name :</span><input id="input-name" type="text" v-model="name"/>
        <hr>

        <span>Email :</span><input id="input-email" type="text" v-model="email"/>
        <hr>

        

        <span>Interest :</span><input id="input-interest" type="text" v-model="interest"/>
        <hr>

        <button @click="handleUpdateProfile()">Update Profile</button>
    </div>
</template>

<script>
import image from './img.png'

export default {
    name: "App",

    data() {
        return{
            image: image,
            name: "",
            email: "",
            interest: "",
            isEditMode: false
        }
    },

    async created(){
     const  userData = await this.fetchUserProfile()
     console.log(userData)
       this.name = userData.name
       this.email = userData.email
       this.interest = userData.interest
    },

    methods:{
        handleEditProfile(){
            this.isEditMode = true

},
async handleUpdateProfile(){
    const payload = {
       name: this.name, 
       email: this.email, 
       interest: this.interest 
    }
 const resJson = await this.updateUserProfile(payload)
 console.log(resJson)
this.isEditMode= false

},
async fetchUserProfile(){
 const  res= await fetch('get-profile')
 const resJson = await res.json()
  return resJson
},
async updateUserProfile(payload){
 const res = await fetch('update-profile',{
    method: "POST",
    headers:{
        'Accept': 'application/json',
        'Content-Type' : 'application/json'
        
    },
    body: JSON.stringify(payload)


 })
 const resJson =await res.json()
 return resJson
}
    }
}
</script>

<style>
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

div{
    width: 80%;
    
    margin: auto;
}
img{
    display: block;
    margin-bottom: 25px;
}

hr{
    width: 400px;
    margin: 20px 0px;
}

button{
    width: 160px;
    height: 45px;
    padding: 10px;
    font-size: 15px;
    border-radius: 5px;

}
input{
    width: 200px;
    padding: 10px;
    font-size: 15px;
}

</style>