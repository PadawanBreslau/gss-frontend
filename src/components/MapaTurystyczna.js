import React from 'react';
import PropTypes from 'prop-types';
import IFrame from './IFrame';

const MapaTurystyczna = ({ mtUuid, horizontalMap, basic, withLink }) => (
  <>
    <div className={horizontalMap ? 'horizontal-map' : 'vertical-map'}>
      <IFrame mtUuid={mtUuid} horizontalMap={horizontalMap} basic={basic} />
      {withLink && (
        <a
          href={`https://mapa-turystyczna.pl/route/${mtUuid}?utm_source=external_web&amp;utm_medium=widget&amp;utm_campaign=route_widget`}
          target="_blank"
          rel="noreferrer"
        >
          <div className="mt-link"> Otwórz na stronie Mapy Turystycznej</div>
        </a>
      )}
    </div>
  </>
);

MapaTurystyczna.propTypes = {
  mtUuid: PropTypes.string,
  horizontalMap: PropTypes.bool,
  basic: PropTypes.bool,
  withLink: PropTypes.bool,
};

export default MapaTurystyczna;
