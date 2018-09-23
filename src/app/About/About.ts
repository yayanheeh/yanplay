import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class About extends Vue {
  socials = [
    {
      href: "https://www.linkedin.com/in/pranavjindal999",
      icon: "socicon-linkedin socicon",
      label: "LinkedIn"
    },
    {
      href: "https://www.github.com/pranavjindal999",
      icon: "socicon-github socicon",
      label: "Github"
    },
    {
      href: "https://www.telegram.me/pranavjindal999",
      icon: "socicon-telegram socicon",
      label: "Telegram"
    },
    {
      href: "https://www.facebook.com/pranavjindal999",
      icon: "socicon-facebook socicon",
      label: "Facebook"
    },
    {
      href: "https://www.twitter.com/pranavjindal999",
      icon: "socicon-twitter socicon",
      label: "Twitter"
    }
  ];

  created() {
    import("lazyload-css").then(lazyLoadCSS => {
      lazyLoadCSS.default(
        "https://d1azc1qln24ryf.cloudfront.net/114779/Socicon/style-cf.css?9ukd8d",
        "socicon"
      );
    });
  }
}