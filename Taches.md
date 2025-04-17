Charlène – Base de données et logique métier des offres et adresses
### 1. Address
Attributs :
id : int

street : string

city : string

zipCode : string

country : string

label : string (nullable)

latitude : float (nullable)

longitude : float (nullable)

Relations :
ManyToMany ou OneToMany avec User (à modéliser selon les besoins de livraison)

### 2. Coupon
Attributs :
id : int

code : string

discountType : string (percentage, fixed)

value : float

expirationDate : datetime

usageLimit : int (nullable)

usedCount : int

Relations :
Peut être reliée plus tard à Order ou User (pas obligatoire immédiatement)

### 3. Plan
Attributs :
id : int

name : string

description : text

price : float

duration : int (en jours)

maxProducts : int

benefits : json

Relations :
À connecter plus tard à Subscription (ManyToOne)

Lara – Sécurité, notifications, modération, remboursements
### 1. Notification
Attributs :
id : int

title : string

content : text

channel : string (email, SMS, push)

createdAt : datetime

readAt : datetime (nullable)

Relations :
ManyToOne vers User (destinataire)

### 2. RefundRequest
Attributs :
id : int

reason : text

status : string (pending, accepted, rejected)

message : text (nullable)

createdAt : datetime

Relations :
ManyToOne vers Order

ManyToOne vers User (demandeur)

ManyToOne vers User (handledBy, admin qui gère le dossier)

### 3. ReviewReport
Attributs :
id : int

reason : string

status : string (pending, validated, rejected)

createdAt : datetime

Relations :
ManyToOne vers Rating

ManyToOne vers User (reportedBy)

Oscar – Logistique, journalisation, zones géographiques
### 1. Delivery
Attributs :
id : int

type : string (retrait, livraison, relais)

carrierName : string

trackingNumber : string (nullable)

estimatedDelivery : datetime (nullable)

status : string

Relations :
OneToOne avec Order

### 2. AuditLog
Attributs :
id : int

entityType : string (ex: “Product”, “Order”)

entityId : int

action : string (create, update, delete)

changes : json

timestamp : datetime

Relations :
ManyToOne vers User (celui qui a exécuté l’action)

### 3. GeographicalArea
Attributs :
id : int

zoneType : string (rayon, ville, région)

zoneValue : string (ex : “Lyon”)

radiusKm : int (nullable)

Relations :
ManyToOne vers User (farmer)

