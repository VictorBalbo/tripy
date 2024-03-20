import BackIcon from './BackIcon.vue'
import BusIcon from './BusIcon.vue'
import BedIcon from './BedIcon.vue'
import CloseIcon from './CloseIcon.vue'
import PlaneIcon from './PlaneIcon.vue'
import PlaneTravelIcon from './PlaneTravelIcon.vue'
import TrainIcon from './TrainIcon.vue'
import TramIcon from './TramIcon.vue'

const Icons =  {
  Plane: PlaneIcon,
  Bus: BusIcon,
  Train: TrainIcon,
  Tram: TramIcon,
  Bed: BedIcon,
  Back: BackIcon,
  Close: CloseIcon,
  PlaneTravel: PlaneTravelIcon
}

export type Icons = keyof typeof Icons

export { BackIcon, CloseIcon, Icons }