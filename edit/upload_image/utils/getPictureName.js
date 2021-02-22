
export default function getPictureName(picture){
    const _name = picture.name.replaceAll(" ", "_");
    const d = new Date();
    var name = `${_name}-(${d.getDate()}-${d.getMonth()}.${d.getMilliseconds()})`;
    return name
}