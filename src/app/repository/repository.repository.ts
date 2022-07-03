import {QuestionModel} from "../model/question.model";
import {AnswerVariantModel} from "../model/answer-variant.model";
import {TypeModel} from "../model/type.model";
import {ResultSegmentModel} from "../model/result-segment.model";
import {StrategyModel} from "../model/strategy.model";

export class RepositoryRepository {
  public typeD = new TypeModel('D');
  public typeI = new TypeModel('i');
  public typeS = new TypeModel('S');
  public typeC = new TypeModel('C');
  public types: Array<TypeModel> = [
    this.typeD,
    this.typeI,
    this.typeS,
    this.typeC
  ];
  public questions: Array<QuestionModel> = [
    new QuestionModel(
      'Šis asmuo kalba...',
      [
        new AnswerVariantModel('tyliai', this.typeS, this.typeD),
        new AnswerVariantModel('garsiai', this.typeI, this.typeC),
        new AnswerVariantModel('užtikrintai', this.typeD, this.typeS),
        new AnswerVariantModel('nerodydamas/a emocijų', this.typeC, this.typeI)
      ],
      1),
    new QuestionModel(
      'Kalbėdamas šis asmuo...',
      [
        new AnswerVariantModel('išlaiko ramų ir draugišką toną', this.typeS, this.typeD),
        new AnswerVariantModel('kalba labai greitai', this.typeI, this.typeC),
        new AnswerVariantModel('pertraukia nereikšmingus pokalbius', this.typeD, this.typeS),
        new AnswerVariantModel('bando kontroliuoti pokalbį', this.typeC, this.typeI)
      ],
      2),
    new QuestionModel(
      'Klausydamas šis asmuo...',
      [
        new AnswerVariantModel('atsako labai greitai', this.typeD, this.typeS),
        new AnswerVariantModel('yra imlus/i ir draugiškas/a', this.typeS, this.typeD),
        new AnswerVariantModel('yra gyvas/a ir atsako energingai', this.typeI, this.typeC),
        new AnswerVariantModel('labai atidžiai išklauso, ką sako kiti', this.typeC, this.typeI)
      ],
      3),
    new QuestionModel(
      'Užduodamas klausimus šis asmuo...',
      [
        new AnswerVariantModel('teiraujasi apie jausmus', this.typeI, this.typeC),
        new AnswerVariantModel('nori gauti esminius faktus', this.typeD, this.typeS),
        new AnswerVariantModel('nori gauti daugiau informacijos', this.typeC, this.typeI),
        new AnswerVariantModel('užduoda „kaip“ klausimus', this.typeS, this.typeD)
      ],
      4),
    new QuestionModel(
      'Stebėdami šio asmens elgseną, Jūs pastebite, kad jis ar ji...',
      [
        new AnswerVariantModel('vaikšto ir daug juda', this.typeD, this.typeS),
        new AnswerVariantModel('daug gestikuliuoja rankomis', this.typeI, this.typeC),
        new AnswerVariantModel('yra santūrus', this.typeC, this.typeI),
        new AnswerVariantModel('palaiko draugišką akių kontaktą', this.typeS, this.typeD)
      ],
      5),
    new QuestionModel(
      'Atsiliepdamas į žmones ar įvykius, šis asmuo...',
      [
        new AnswerVariantModel('yra entuziastingas/a', this.typeI, this.typeC),
        new AnswerVariantModel('yra atsipalaidavęs/a', this.typeS, this.typeD),
        new AnswerVariantModel('yra nerimastingas/a', this.typeD, this.typeS),
        new AnswerVariantModel('išlaiko atstumą', this.typeC, this.typeI)
      ],
      6),
    new QuestionModel(
      'Stebėdami, kaip šis asmuo bendrauja su kitais, Jūs pastebite, kad jis ar ji...',
      [
        new AnswerVariantModel('yra draugiškas/a', this.typeS, this.typeD),
        new AnswerVariantModel('stebi nepertraukinėdamas/a', this.typeC, this.typeI),
        new AnswerVariantModel('bando vadovauti', this.typeD, this.typeS),
        new AnswerVariantModel('atvirai reiškia savo jausmus', this.typeI, this.typeC)
      ],
      7),
    new QuestionModel(
      'Atsiliepdamas į užduotis ar santykius, šis asmuo...',
      [
        new AnswerVariantModel('yra spontaniškas/a', this.typeI, this.typeC),
        new AnswerVariantModel('greitai padaro išvadas/a', this.typeD, this.typeS),
        new AnswerVariantModel('atsakinėja atsargiai', this.typeC, this.typeI),
        new AnswerVariantModel('yra bendradarbiaujantis/i ir sisteminantis/i', this.typeS, this.typeD)
      ],
      8)
  ];

  public resultSegments: Array<ResultSegmentModel> = [
    /* D */
    new ResultSegmentModel(this.typeD, 7, [10, 11, 12, 13, 14, 15, 16].sort().reverse()),
    new ResultSegmentModel(this.typeD, 6, [7, 8, 9].sort().reverse()),
    new ResultSegmentModel(this.typeD, 5, [5, 6].sort().reverse()),
    new ResultSegmentModel(this.typeD, 4, [4].sort().reverse(), true),
    new ResultSegmentModel(this.typeD, 3, [3].sort().reverse()),
    new ResultSegmentModel(this.typeD, 2, [1, 2].sort().reverse()),
    new ResultSegmentModel(this.typeD, 1, [0].sort().reverse()),
    /* I */
    new ResultSegmentModel(this.typeI, 7, [12, 13, 14, 15, 16].sort().reverse()),
    new ResultSegmentModel(this.typeI, 6, [9, 10, 11].sort().reverse()),
    new ResultSegmentModel(this.typeI, 5, [7, 8].sort().reverse()),
    new ResultSegmentModel(this.typeI, 4, [5, 6].sort().reverse(), true),
    new ResultSegmentModel(this.typeI, 3, [3, 4].sort().reverse()),
    new ResultSegmentModel(this.typeI, 2, [1, 2].sort().reverse()),
    new ResultSegmentModel(this.typeI, 1, [0].sort().reverse()),
    /* S */
    new ResultSegmentModel(this.typeS, 7, [10, 11, 12, 13, 14, 15, 16].sort().reverse()),
    new ResultSegmentModel(this.typeS, 6, [7, 8, 9].sort().reverse()),
    new ResultSegmentModel(this.typeS, 5, [6].sort().reverse()),
    new ResultSegmentModel(this.typeS, 4, [5].sort().reverse(), true),
    new ResultSegmentModel(this.typeS, 3, [4].sort().reverse()),
    new ResultSegmentModel(this.typeS, 2, [2, 3].sort().reverse()),
    new ResultSegmentModel(this.typeS, 1, [0, 1].sort().reverse()),
    /* C */
    new ResultSegmentModel(this.typeC, 7, [11, 12, 13, 14, 15, 16].sort().reverse()),
    new ResultSegmentModel(this.typeC, 6, [8, 9, 10].sort().reverse()),
    new ResultSegmentModel(this.typeC, 5, [6, 7].sort().reverse()),
    new ResultSegmentModel(this.typeC, 4, [4, 5].sort().reverse(), true),
    new ResultSegmentModel(this.typeC, 3, [3].sort().reverse()),
    new ResultSegmentModel(this.typeC, 2, [1, 2].sort().reverse()),
    new ResultSegmentModel(this.typeC, 1, [0].sort().reverse()),
  ];

  public strategies: Array<StrategyModel> = [
    new StrategyModel(
      this.typeD,
      [
        'Rezultatų',
        'Kontrolės'
      ],
      [
        'Netekti kontrolės',
        'Kad jais nebutų pasinaudota'
      ],
      [
        'Patinka greitas tempas, nauja veikla, pokyčiai ir įvairovė',
        'Veikia greitai ir sužadina svarbos pojūtį kituose',
        'Mėqsta iššūkius ir konkurenciją',
        'Siekdami rezultatų, gali būti beatodairiški',
        'Problemas sprendžia tiesiogiai, imdamiesi veiksmų'
      ]),
    new StrategyModel(
      this.typeI,
      [
        'Būti tarp žmonių',
        'Pripažinimo'
      ],
      [
        'Būti atstumti',
        'Nesusilaukti pritarimo'
      ],
      [
        'Mėgsta bendrauti su įvairiais žmonėmis',
        'Mėgsta reikšti savo mintis ir jausmus, tai daro gyvai ir entuziastingai',
        'Greitai prisitaiko prie naujų idėju bei pokyčių',
        'Sudėtingose situacijose siekia pozityvaus bendravimo',
      ]),
    new StrategyModel(
      this.typeS,
      [
        'Saugumo',
        'Pastovumo'
      ],
      [
        'Staigių pokyčių',
        'Netekti saugumo'
      ],
      [
        'Priima kitų žmonių mintis',
        'Siekdami rezultatų, mėgsta bendradarbiauti su kitais',
        'Norėdami patenkinti kitų poreikius, lengvai prisitaiko',
        'Dirbdami stengiasi sukurti nuspėjamą, pastovia aplinką',
        'Jiems gerai sekasi nuraminti ir paguosti kitus',
      ]),
    new StrategyModel(
      this.typeC,
      [
        'Tikslumo',
        'Tvarkos'
      ],
      [
        'Standartų trūkumo',
        'Savo veiklos kritikos'
      ],
      [
        'Analizuoja situacijas bei problems, pasverdami „už“ ir „prieš“',
        'Vertina tikslumą, kokybę',
        'Dirba sistemingai',
        'Bendraudami su kitais yra taktiški ir diplomatiški',
        'Konfliktus sprendžia subtiliai arba netiesiogiai'
      ])
  ];
}
