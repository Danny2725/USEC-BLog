/* eslint-disable react/prop-types */


const ClubMember = ({ name, position, image,department  }) => {
  return (
    <div className="bg-white rounded-lg p-6 mb-8 flex items-center">
      <div>
        <img src={image} alt={`Hình ảnh của ${name}`} className="w-16 h-16 rounded-full mr-4" />
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <p className="text-gray-600">{position}</p>
        <p className="text-gray-600">{department }</p>

      </div>
    </div>
  );
};
export default ClubMember;
