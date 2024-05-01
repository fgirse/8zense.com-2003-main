import Video from 'next-video';

import myVideo from '@/videos/LogoEZ.mp4';


export default function Page() {

  return <Video className="rounded-xl shadow-2xl height={400} width={400}  " src={myVideo} muted={true}loop={true} autoplay="true" />;

}