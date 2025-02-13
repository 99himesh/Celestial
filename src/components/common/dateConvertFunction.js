export const  formatDate=(dbDate) =>{
    const date = new Date(dbDate);
    const options = {  day: '2-digit', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}