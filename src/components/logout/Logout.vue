<script>
import { mapState } from 'pinia';

import { logout } from '../../dataProviders/auth.js';
import { useUserStore } from '../../store/userStore.js';

export default {
  data() {
    return {
      user: useUserStore.user,
      currentUserSessionToken: sessionStorage.getItem('user.sessionToken'),
    };
  },
  computed: {
    ...mapState(useUserStore, ['user', 'currentSessionToken', 'logoutUser']),
  },
  created() {
    this.logUserOut();
  },
  methods: {
    async logUserOut() {
      console.log(useUserStore.user);
      console.log(this.currentUserSessionToken);
      // user = { objectId, createdAt, sessionToken }

      // logout from Back4App
      const response = await logout(this.currentUserSessionToken);
      console.log(response);

      // update userStore
      useUserStore.logoutUser();
      /*
            logout() {
                this.isAuthenticated = false;
                this.user = null;
                sessionStorage.removeItem('user');
            },
        */

      this.$router.push('/');
    },
  },
};
</script>
