<template>
    <AddMember @add-member="addMember"/>

</template>

<script>
import AddMember from '../components/AddMember'

export default{
    name: 'Signup',
    components: {
        AddMember
    },
    methods: {
        addMember(newMember){
            console.log(newMember);
        }
    }
}
</script>