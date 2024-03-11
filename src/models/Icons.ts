import PlaneIcon from '@/components/icons/plane-travel.svg'
import BusIcon from '@/components/icons/bus.svg'
import TrainIcon from '@/components/icons/train.svg'
import BedIcon from '@/components/icons/bed.svg'

export enum Icons {
  Plane = 'Plane',
  Bus = 'Bus',
  Train = 'Train',
  Bed = 'Bed',
}

export const getIconByName = (icon: string) => {
  switch (icon) {
    case Icons.Plane:
      return PlaneIcon;
    case Icons.Train:
      return TrainIcon;
    case Icons.Bus:
      return BusIcon;
    case Icons.Bed:
      return BedIcon;
  }
}