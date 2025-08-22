import type { FC } from 'react';

export const ProjectStatusBadge: FC = () => {
  return (
    <div
      className={`w-fit flex items-center justify-center space-x-2 py-2 px-4 rounded-lg bg-opacity-5 bg-orange/10`}
    >
      <div className={`rounded-full w-2 h-2 bg-orange`}></div>
      <div className={`font-semibold text-orange`}>In Progress</div>
    </div>
  );
};
