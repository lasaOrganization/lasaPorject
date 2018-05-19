<template>
<div class="login">
    <img src="../../../static/img/login1.png" alt="" style="width:70%"/>
    <el-form ref="form" :model="form" label-width="80px" style="margin-left:60%;width:20%" :rules="rules">
      <el-form-item label="用户名" class="textLeft" prop="name">
         <el-input v-model="form.name" class="widthSeven" placeholder="账号随便填"></el-input>
      </el-form-item>
      <el-form-item label="密码" class="textLeft" prop="checkPass">
         <el-input v-model="form.pass" class="widthSeven" placeholder="密码随便填" type="password"></el-input>
      </el-form-item>
      <el-form-item label="验证码" class="textLeft" prop="verCode">
         <el-input v-model="verCode" class="widthSeven"></el-input>
         <div class="code" @click="refreshCode" style="display:inline-blcok">
    <s-identify :identifyCode="identifyCode"></s-identify>
  </div>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked" style="margin-left:-80px;"><p style="font-size:1.2rem">保存我的用户名</p></el-checkbox>
        <el-button type="primary" @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
import SIdentify from '@/components/identify/identify'
export default {
  components: {SIdentify},
  data () {
    var validateName = (rule, value, callback) => {
      if (this.form.name === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (this.form.pass === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    var checkverCode = (rule, value, callback) => {
      if (this.verCode === '') {
        callback(new Error('请输入验证码'))
      } else {
        if (this.verCode !== this.identifyCode) {
          callback(new Error('验证码错误'))
        }
        callback()
      }
    }
    return {
      form: {'name': '', 'pass': ''},
      verCode: '',
      checked: true,
      identifyCodes: '1234567890',
      identifyCode: '',
      rules: {
        name: [
          { validator: validateName, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        verCode: [
          { validator: checkverCode, trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  },
  methods: {
    randomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode () {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode (o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
      }
      console.log(this.identifyCode)
    },
    submit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$message({
            type: 'success',
            message: '登录成功'
          })
          this.$router.push('/pages')
        } else {
          this.$message({
            type: 'warning',
            message: '请先确保您填的信息符合条件'
          })
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.login{
    background-color: #C6E4E6;
}
.textLeft{
    text-align: left;
}
.widthSeven{
    width: 70%;
}
.code {
    width: 20%;
  height: 40px;
  float:right;
}
</style>
