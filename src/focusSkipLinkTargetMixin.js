export default {
  watch: {
    $route: 'onRouteChange'
  },
  mounted () {
    this.focusSkipLinkTarget(this.$route)
  },
  methods: {
    focusSkipLinkTarget (route) {
      // Assuming that every referenced element with an id was meant to be used
      // as a target of a skip link.
      // Note that you have add `tabindex="-1"` to elements that are not focusable by default.
      const potentialSkipLinkTargets = Object.values(this.$refs).filter(el => el.id)

      if (route.hash) {
        const skipLinkTarget = potentialSkipLinkTargets.find(el => route.hash === `#${el.id}`)

        if (skipLinkTarget) {
          skipLinkTarget.focus()
        }
      }
    },
    onRouteChange (to, from) {
      this.focusSkipLinkTarget(to)
    }
  }
}
