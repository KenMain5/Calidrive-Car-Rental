const COUNTRIES = [
  { label: "Afghanistan", value: "string:AF" },
  { label: "Albania", value: "string:AL" },
  { label: "Algeria", value: "string:DZ" },
  { label: "Andorra", value: "string:AD" },
  { label: "Angola", value: "string:AO" },
  { label: "Anguilla", value: "string:AI" },
  { label: "Antigua", value: "string:AG" },
  { label: "Argentina", value: "string:AR" },
  { label: "Armenia", value: "string:AM" },
  { label: "Aruba", value: "string:AB" },
  { label: "Australia", value: "string:AU" },
  { label: "Austria", value: "string:AT" },
  { label: "Azerbaijan", value: "string:AZ" },
  { label: "Bahamas", value: "string:BS" },
  { label: "Bahrain", value: "string:BH" },
  { label: "Bangladesh", value: "string:BL" },
  { label: "Barbados", value: "string:BB" },
  { label: "Belarus", value: "string:BA" },
  { label: "Belgium", value: "string:BE" },
  { label: "Belize", value: "string:BZ" },
  { label: "Benin (Peoples Republic of)", value: "string:BP" },
  { label: "Bermuda", value: "string:BM" },
  { label: "Bhutan", value: "string:BT" },
  { label: "Bolivia", value: "string:BO" },
  { label: "Bonaire", value: "string:YE" },
  { label: "Bosnia", value: "string:QB" },
  { label: "Botswana", value: "string:BW" },
  { label: "Brazil", value: "string:BR" },
  { label: "Brunei", value: "string:BN" },
  { label: "Bulgaria", value: "string:BG" },
{ label: "Burkina Faso", value: "string:UV" },
{ label: "Burma", value: "string:BU" },
{ label: "Burundi", value: "string:BI" },
{ label: "Cameroon", value: "string:CM" },
{ label: "Canada", value: "string:CA" },
{ label: "Cape Verde Is.", value: "string:CB" },
{ label: "Caroline Islands", value: "string:CE" },
{ label: "Cayman Islands", value: "string:CT" },
{ label: "Central African Republic", value: "string:CF" },
{ label: "Chad", value: "string:CD" },
{ label: "Chile", value: "string:CL" },
{ label: "China", value: "string:CN" },
{ label: "Colombia", value: "string:CO" },
{ label: "Comores", value: "string:CJ" },
{ label: "Congo", value: "string:CG" },
{ label: "Congo (Dem. Rep. of the)", value: "string:ZM" },
{ label: "Cook Islands (Rarotonga)", value: "string:CK" },
{ label: "Costa Rica", value: "string:CR" },
{ label: "Croatia", value: "string:HR" },
{ label: "Cuba", value: "string:CU" },
{ label: "Curacao (Netherland Antilles)", value: "string:AN" },
{ label: "Cyprus", value: "string:CY" },
{ label: "Czech Republic", value: "string:CS" },
{ label: "Denmark", value: "string:DK" },
{ label: "Djibouti Rep", value: "string:DR" },
{ label: "Dominica", value: "string:DM" },
{ label: "Dominican Republic", value: "string:DO" },
{ label: "Ecuador", value: "string:EC" },
{ label: "Egypt", value: "string:EG" },
{ label: "Ellice Islands", value: "string:EI" },
{ label: "El Salvador", value: "string:EL" },
{ label: "Equatorial Guinea", value: "string:EQ" },
{ label: "Estonia", value: "string:EE" },
{ label: "Ethiopia", value: "string:ET" },
{ label: "Falkland Islands", value: "string:FA" },
{ label: "Faroe Islands", value: "string:FO" },
{ label: "Fiji Islands", value: "string:FJ" },
{ label: "Finland", value: "string:FI" },
{ label: "France", value: "string:FR" },
{ label: "French Guiana", value: "string:FG" },
{ label: "Gabon", value: "string:GA" },
{ label: "Gambia", value: "string:GM" },
{ label: "Georgia", value: "string:GE" },
{ label: "Germany", value: "string:DE" },
{ label: "Ghana", value: "string:GH" },
{ label: "Gibraltar", value: "string:GI" },
{ label: "Gilbert Islands", value: "string:GL" },
{ label: "Greece", value: "string:GR" },
{ label: "Greenland", value: "string:GG" },
{ label: "Grenada", value: "string:GD" },
{ label: "Guadeloupe(French West Indies)", value: "string:GP" },
{ label: "Guam", value: "string:GU" },
{ label: "Guatemala", value: "string:GT" },
{ label: "Guinea", value: "string:GN" },
{ label: "Guinea-Bissau", value: "string:GS" },
{ label: "Guyana", value: "string:GY" },
{ label: "Haiti", value: "string:HT" },
{ label: "Honduras", value: "string:HD" },
{ label: "Hong Kong", value: "string:HK" },
{ label: "Hungary", value: "string:HU" },
{ label: "Iceland", value: "string:IS" },
{ label: "India", value: "string:IN" },
{ label: "Indonesia", value: "string:ID" },
{ label: "Iran", value: "string:IR" },
{ label: "Iraq", value: "string:IQ" },
{ label: "Ireland (Republic)", value: "string:IE" },
{ label: "Israel", value: "string:IL" },
{ label: "Italy", value: "string:IT" },
{ label: "Ivory Coast", value: "string:CI" },
{ label: "Jamaica", value: "string:JM" },
{ label: "Japan", value: "string:JP" },
{ label: "Jordan", value: "string:JO" },
{ label: "Kazakhstan", value: "string:KZ" },
{ label: "Kenya", value: "string:KE" },
{ label: "Khmer Republic", value: "string:KH" },
{ label: "Kiribati", value: "string:KI" },
{ label: "Kuwait", value: "string:KW" },
{ label: "Laos", value: "string:LA" },
{ label: "Latvia", value: "string:LV" },
{ label: "Lebanon", value: "string:LB" },
{ label: "Leichtenstein", value: "string:LI" },
{ label: "Lesotho", value: "string:LS" },
{ label: "Liberia", value: "string:LR" },
{ label: "Libya", value: "string:LY" },
{ label: "Line Islands", value: "string:LE" },
{ label: "Lithuania", value: "string:LT" },
{ label: "Luxembourg", value: "string:LU" },
{ label: "Macau", value: "string:MK" },
{ label: "Macedonia (Fyrom)", value: "string:QM" },
{ label: "Madagascar", value: "string:MG" },
{ label: "Malawi", value: "string:MW" },
{ label: "Malaysia", value: "string:MY" },
{ label: "Maldive Islands", value: "string:MI" },
{ label: "Mali", value: "string:ML" },
{ label: "Malta", value: "string:MT" },
{ label: "Mariana Islands", value: "string:MR" },
{ label: "Marshall Islands", value: "string:MS" },
{ label: "Martinique", value: "string:MQ" },
{ label: "Mauritania", value: "string:MM" },
{ label: "Mauritius", value: "string:MU" },
{ label: "Mexico", value: "string:MX" },
{ label: "Moldova", value: "string:MD" },
{ label: "Mongolia", value: "string:MO" },
{ label: "Morocco", value: "string:MA" },
{ label: "Mozambique", value: "string:MZ" },
{ label: "Namibia", value: "string:SW" },
{ label: "Nauru", value: "string:NA" },
{ label: "Nepal", value: "string:NE" },
{ label: "New Caledonia", value: "string:NC" },
{ label: "New Zealand", value: "string:NZ" },
{ label: "Nicaragua", value: "string:NI" },
{ label: "Niger", value: "string:NR" },
{ label: "Nigeria", value: "string:NG" },
{ label: "Norfolk Islands", value: "string:NS" },
{ label: "North Korea", value: "string:KD" },
{ label: "Norway", value: "string:NO" },
{ label: "Oman (Sultanate of)", value: "string:OM" },
{ label: "Pakistan", value: "string:PK" },
{ label: "Panama", value: "string:PA" },
{ label: "Papua New Guinea", value: "string:NU" },
{ label: "Paraguay", value: "string:PY" },
{ label: "Peru", value: "string:PE" },
{ label: "Philippines", value: "string:PH" },
{ label: "Phoenix Islands", value: "string:PI" },
{ label: "Poland", value: "string:PL" },
{ label: "Portugal", value: "string:PT" },
{ label: "Puerto Rico", value: "string:PR" },
{ label: "Qatar", value: "string:QA" },
{ label: "Reunion Islands", value: "string:RI" },
{ label: "Romania", value: "string:RO" },
{ label: "Russian Federation", value: "string:QC" },
{ label: "Rwanda", value: "string:RW" },
{ label: "Sabah", value: "string:SB" },
{ label: "Saipan", value: "string:SP" },
{ label: "Samoa (American)", value: "string:AS" },
{ label: "Samoa (Western)", value: "string:WS" },
{ label: "San Marino", value: "string:SM" },
{ label: "Saudi Arabia", value: "string:SA" },
{ label: "Senegal", value: "string:SN" },
{ label: "Serbia & Montenegro", value: "string:YU" },
{ label: "Seychelles", value: "string:SC" },
{ label: "Sierra Leone", value: "string:SL" },
{ label: "Singapore", value: "string:SG" },
{ label: "Slovak Republic", value: "string:QV" },
{ label: "Slovenia", value: "string:QS" },
{ label: "Soa Tome", value: "string:ST" },
{ label: "Society Islands", value: "string:SO" },
{ label: "Solomon Islands", value: "string:SI" },
{ label: "Somali Dem Rep", value: "string:SQ" },
{ label: "South Africa", value: "string:ZA" },
{ label: "South Korea", value: "string:KP" },
{ label: "Spain", value: "string:ES" },
{ label: "Sri Lanka", value: "string:LK" },
{ label: "St Barthelemy", value: "string:BY" },
{ label: "St Eustatius", value: "string:EU" },
{ label: "St John", value: "string:JN" },
{ label: "St Kitts, Nevis", value: "string:SK" },
{ label: "St Lucia", value: "string:LC" },
{ label: "St Martin /St Maarten", value: "string:ZY" },
{ label: "St Vincent", value: "string:VC" },
{ label: "Sudan", value: "string:SD" },
{ label: "Suriname", value: "string:SR" },
{ label: "Swaziland", value: "string:SZ" },
{ label: "Sweden", value: "string:SE" },
{ label: "Switzerland", value: "string:CH" },
{ label: "Syria", value: "string:SY" },
{ label: "Tahiti (French Polynesia)", value: "string:TA" },
{ label: "Taiwan", value: "string:TB" },
{ label: "Tanzania", value: "string:TZ" },
{ label: "Thailand", value: "string:TH" },
{ label: "The Netherlands", value: "string:NL" },
{ label: "Timor", value: "string:TP" },
{ label: "Togo", value: "string:TG" },
{ label: "Tonga", value: "string:TO" },
{ label: "Tortola (British Virgin Isl)", value: "string:TL" },
{ label: "Trinidad & Tobago", value: "string:TT" },
{ label: "Tunisia", value: "string:TN" },
{ label: "Turkey", value: "string:TR" },
{ label: "Turks and Caicos", value: "string:TC" },
{ label: "Uganda", value: "string:UG" },
{ label: "Ukraine", value: "string:UA" },
{ label: "United Arab Emirates", value: "string:UE" },
{ label: "United Kingdom", value: "string:GB" },
{ label: "Uruguay", value: "string:UY" },
{ label: "U S A", value: "string:US" },
{ label: "US Virgin Islands (St Croix)", value: "string:CX" },
{ label: "US Virgin Islands (St Thomas)", value: "string:CV" },
{ label: "Vanuatu", value: "string:NH" },
{ label: "Venezuela", value: "string:VE" },
{ label: "Vietnam", value: "string:VN" },
{ label: "Yemen", value: "string:YD" },
{ label: "Zambia", value: "string:ZB" },
{ label: "Zimbabwe", value: "string:KF" }
];

export default COUNTRIES; 