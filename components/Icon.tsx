import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpCircleIcon,
  Bars2Icon,
  NewspaperIcon,
  PuzzlePieceIcon,
  HomeIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
  TagIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

export const Icon = ({
  name,
  className,
}: {
  name: string
  className?: string
}) => {
  const icons: { [key: string]: any } = {
    blog: NewspaperIcon,
    burger: Bars2Icon,
    close: XMarkIcon,
    home: HomeIcon,
    inspiration: PuzzlePieceIcon,
    next: ArrowRightIcon,
    podcasts: CalendarDaysIcon,
    prev: ArrowLeftIcon,
    resources: DocumentTextIcon,
    tag: TagIcon,
    tools: UserGroupIcon,
    up: ArrowUpCircleIcon,
  }

  const IconComponent = icons[name]

  if (!IconComponent) {
    return null
  }

  return <IconComponent className={className} />
}
