//Import หน้า page ทั้งหมด
import TodoPage from '../components/pages/Index.js'
import LoginPage from '../components/pages/Login'
import ProfilePage from '../components/pages/Profile'
import RegisterPage from '../components/pages/Register'

//ภายใน componemt นี้ประกอบไปด้วยรายละเอียดการเข้าหน้าต่างๆ
const components = {
    todo: {
        url: "/todo",
        component: TodoPage
    },
    login: {
        url: "/login",
        component: LoginPage
    },
    profile: {
        url: "/profile",
        component: ProfilePage
    },
    register: {
        url: "/register",
        component: RegisterPage
    }
};

// Roll ไหนเข้าหน้าไหนได้บ้าง
// ** guest กับ user สามารถมี หน้าเดียวกันได้
export default {
    guest: {
        allowedRoutes: [
            components.login,
            components.register
        ],
        redirectRoutes: "/login"
    },
    user: {
        allowedRoutes: [
            components.todo,
            components.profile
        ],
        redirectRoutes: "/profile"
    },
}