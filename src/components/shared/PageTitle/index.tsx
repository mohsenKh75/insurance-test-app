import { classnames } from '@/utils';

interface Props {
  title?: string;
  className?: string;
}
export function PageTitle({ title, className }: Props) {
  return <p className={classnames('text-lg', className)}>{title}</p>;
}
