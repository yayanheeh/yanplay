import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { asyncYoutubeIframeAPI } from "@/services/youtube/youtubeIframe";
import { randomString } from "lodash";
import FloatingDiv from "@/app/shared/FloatingDiv/FloatingDiv.vue";
@Component({
  components: {
    FloatingDiv
  }
})
export default class YoutubePlayer extends Vue {
  player: YT.Player | null = null;
  asyncPlayerState!: Promise<void>;
  elementToAttach = randomString();
  isPlayerReady: boolean = false;

  @Prop({ type: String, required: true })
  videoId!: string;

  async mounted() {
    await this.makePlayerReady();
  }

  @Watch("videoId")
  async changeVideo(newId: string, oldId: string) {
    await this.asyncPlayerState;

    let player = this.player!;

    if (newId !== oldId) {
      player.loadVideoById(this.videoId);
    }
  }

  async makePlayerReady() {
    this.asyncPlayerState = new Promise(async resolve => {
      await asyncYoutubeIframeAPI;
      this.player = new YT.Player(this.elementToAttach, {
        height: "390",
        width: "640",
        videoId: this.videoId,
        events: {
          onReady: () => {
            this.isPlayerReady = true;
            this.player!.playVideo();
            resolve();
          }
        }
      });
    });
  }
}
