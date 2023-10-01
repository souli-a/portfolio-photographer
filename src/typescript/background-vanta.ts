import * as THREE from 'three';
import vanta from 'vanta/dist/vanta.fog.min';

export default vanta({
  el: '.background-animate',
  highlightColor: 0x171717,
  midtoneColor: 0x171717,
  lowlightColor: 0xe8e8e8,
  baseColor: 0x171717,
  blurFactor: 0.4,
  speed: 0.1,
  zoom: 0.2,
  THREE: THREE,
});
