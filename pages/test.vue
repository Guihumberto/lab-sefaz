<template>
    <div>
        <h3>Lista teste</h3>
        <div class="box">
            <div class="list">
                <div class="imgBx">
                    <v-icon size="60">mdi-account</v-icon>
                </div>
                <div class="content">
                    <h2 class="rank">
                        <small>#</small>1
                    </h2>
                    <h4>Clare Jones</h4>
                    <p>Backend Developer</p>
                </div>
            </div>
            <div class="list">
                <div class="imgBx">
                    <v-icon size="60">mdi-account</v-icon>
                </div>
                <div class="content">
                    <h2 class="rank">
                        <small>#</small>2
                    </h2>
                    <h4>Clare Jones</h4>
                    <p>Backend Developer</p>
                </div>
            </div>
            <div class="list">
                <div class="imgBx">
                    <v-icon size="60">mdi-account</v-icon>
                </div>
                <div class="content">
                    <h2 class="rank">
                        <small>#</small>3
                    </h2>
                    <h4>Clare Jones</h4>
                    <p>Backend Developer</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
h3{
    font-size: 1.75em;
    color: #333;
    margin-bottom: 20px;
}
.box{
    position: relative;
    min-width: 350px;
}
.box .list{
    position: relative;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    margin: 10px 0;
    cursor: pointer;
    transition: 0.5s;
    overflow: hidden;
    background: rgb(233, 228, 228);
}
.box:hover .list {
    filter: blur(1.5px);
    opacity: 0.50;
}
.box .list:hover {
    box-shadow: -10px 20px 35px rgba(0,0,0,0.15);
    transform: scale(1.1);
    filter: blur(0px);
    opacity: 1;
}
.box .list .imgBx{
    background: #fff;
    margin-right: 10px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    width: 60px;
    height: 60px;
}
.box .list .imgBx .v-icon{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.box .list .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #333;
}
.box .list .content .rank {
    position: absolute;
    right: 50px;
    color: #03a9f4;
    transition: .5s;
    font-size: 2em;
}
.box .list .content .rank small {
    font-weight: 500;
    opacity: 0.25;
}
.box .list:hover .content .rank {
    right: 20px;
}
.box .list .content h4 {
    line-height: 1.2em;
    font-weight: 600;
}
.box .list .content p {
    font-size: 0.75em;
}
</style>