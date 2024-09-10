function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    return new Date(date).toLocaleDateString(undefined, options);
}

// Returns a pretty/readable category string. (Converted from a category URL from config.ts to a pretty string)
function getPrettyCategoryName(categoryURL: string): string {
    var prettyCategoryName = 'null';

    switch (categoryURL) {
        case 'orchestral':
            prettyCategoryName = 'Orchestral'
            break;
        case 'chamber-music-2-3':
            prettyCategoryName = 'Chamber Music: 2-3 Performers'
            break;
        case 'chamber-music-4':
            prettyCategoryName = 'Chamber Music: 4+ Performers'
            break;
        case 'choir':
            prettyCategoryName = 'Choir'
            break;
        case 'vocal':
            prettyCategoryName = 'Vocal'
            break;
        case 'solo-instrumental':
            prettyCategoryName = 'Solo Instrumental'
            break;
        default:
            break;
    }

    return prettyCategoryName;
}

export { formatDate, getPrettyCategoryName }