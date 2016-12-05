module System {
    export const enum DayOfWeek {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6
    }
}
module Api.Models.Jobs {
    export const enum JobState {
        Pending = 0,
        Running = 1,
        Complete = 2,
        AwaitingUserInput = 3,
        Error = 4,
        AwaitingExternal = 5,
        Paused = 6
    }

    export const enum ScheduleRepeatType {
        Hour  = 0,
        Day   = 1,
        Week  = 2,
        Month = 3
    }
}
module System.Reflection {
    export const enum MemberTypes {
        Constructor = 1,
        Event = 2,
        Field = 4,
        Method = 8,
        Property = 16,
        TypeInfo = 32,
        Custom = 64,
        NestedType = 128,
        All = 191
    }
    export const enum ParameterAttributes {
        None = 0,
        In = 1,
        Out = 2,
        Lcid = 4,
        Retval = 8,
        Optional = 16,
        ReservedMask = 61440,
        HasDefault = 4096,
        HasFieldMarshal = 8192,
        Reserved3 = 16384,
        Reserved4 = 32768
    }
    export const enum EventAttributes {
        None = 0,
        SpecialName = 512,
        ReservedMask = 1024,
        RTSpecialName = 1024
    }
    export const enum FieldAttributes {
        FieldAccessMask = 7,
        PrivateScope = 0,
        Private = 1,
        FamANDAssem = 2,
        Assembly = 3,
        Family = 4,
        FamORAssem = 5,
        Public = 6,
        Static = 16,
        InitOnly = 32,
        Literal = 64,
        NotSerialized = 128,
        SpecialName = 512,
        PinvokeImpl = 8192,
        ReservedMask = 38144,
        RTSpecialName = 1024,
        HasFieldMarshal = 4096,
        HasDefault = 32768,
        HasFieldRVA = 256
    }
    export const enum PropertyAttributes {
        None = 0,
        SpecialName = 512,
        ReservedMask = 62464,
        RTSpecialName = 1024,
        HasDefault = 4096,
        Reserved2 = 8192,
        Reserved3 = 16384,
        Reserved4 = 32768
    }
    export const enum TypeAttributes {
        VisibilityMask = 7,
        NotPublic = 0,
        Public = 1,
        NestedPublic = 2,
        NestedPrivate = 3,
        NestedFamily = 4,
        NestedAssembly = 5,
        NestedFamANDAssem = 6,
        NestedFamORAssem = 7,
        LayoutMask = 24,
        AutoLayout = 0,
        SequentialLayout = 8,
        ExplicitLayout = 16,
        ClassSemanticsMask = 32,
        Class = 0,
        Interface = 32,
        Abstract = 128,
        Sealed = 256,
        SpecialName = 1024,
        Import = 4096,
        Serializable = 8192,
        WindowsRuntime = 16384,
        StringFormatMask = 196608,
        AnsiClass = 0,
        UnicodeClass = 65536,
        AutoClass = 131072,
        CustomFormatClass = 196608,
        CustomFormatMask = 12582912,
        BeforeFieldInit = 1048576,
        ReservedMask = 264192,
        RTSpecialName = 2048,
        HasSecurity = 262144
    }
    export const enum GenericParameterAttributes {
        None = 0,
        VarianceMask = 3,
        Covariant = 1,
        Contravariant = 2,
        SpecialConstraintMask = 28,
        ReferenceTypeConstraint = 4,
        NotNullableValueTypeConstraint = 8,
        DefaultConstructorConstraint = 16
    }
    export const enum MethodImplAttributes {
        CodeTypeMask = 3,
        IL = 0,
        Native = 1,
        OPTIL = 2,
        Runtime = 3,
        ManagedMask = 4,
        Unmanaged = 4,
        Managed = 0,
        ForwardRef = 16,
        PreserveSig = 128,
        InternalCall = 4096,
        Synchronized = 32,
        NoInlining = 8,
        AggressiveInlining = 256,
        NoOptimization = 64,
        MaxMethodImplVal = 65535
    }
    export const enum MethodAttributes {
        MemberAccessMask = 7,
        PrivateScope = 0,
        Private = 1,
        FamANDAssem = 2,
        Assembly = 3,
        Family = 4,
        FamORAssem = 5,
        Public = 6,
        Static = 16,
        Final = 32,
        Virtual = 64,
        HideBySig = 128,
        CheckAccessOnOverride = 512,
        VtableLayoutMask = 256,
        ReuseSlot = 0,
        NewSlot = 256,
        Abstract = 1024,
        SpecialName = 2048,
        PinvokeImpl = 8192,
        UnmanagedExport = 8,
        RTSpecialName = 4096,
        ReservedMask = 53248,
        HasSecurity = 16384,
        RequireSecObject = 32768
    }
    export const enum CallingConventions {
        Standard = 1,
        VarArgs = 2,
        Any = 3,
        HasThis = 32,
        ExplicitThis = 64
    }
}
module System.Runtime.InteropServices {
    export const enum LayoutKind {
        Sequential = 0,
        Explicit = 2,
        Auto = 3
    }
}
module Api.Models.Comments {
    export const enum CommentVisibility {
        Everyone = 0,
        MentionsOnly = 1,
        Explicit = 2
    }
}
module Api.Models.Enums {
    export const enum ContactType {
        Unknown = 0,
        Subject = 1,
        User = 2
    }
    export const enum AccessLevel {
        Standard = 0,
        Admin = 1,
        Super = 2,
        System = 3
    }
    export const enum AttachmentType {
        File = 0,
        Uri = 1,
        External = 2
    }
    export const enum AttributeType {
        Numeric = 0,
        Text = 1,
        Bool = 2,
        SingleLookup = 3,
        MultiLookup = 4,
        Table = 5,
        Exercise = 6,
        Duration = 7,
        DateTime = 8
    }
    export const enum ExerciseType {
        WeightsBased = 0,
        DurationBased = 1
    }
    export const enum CalculatedAttributeScope {
        CurrentOnly = 0,
        CurrentAndGeneral = 1,
        EntireSession = 2
    }
    export const enum PermissionLevel {
        None = 0,
        ViewSummary = 1,
        View = 2,
        Edit = 3,
        EditDefinition = 4
    }
	export const enum RecordPermissionType {
		Everyone = 0,
		Myself = 1,
		DistributionLists = 2
	}
    export const enum ChangeType {
        Worse = -1,
        NoChange = 0,
        Better = 1
    }
    export const enum TrafficLightStatus {
        None = -1,
        Green = 0,
        Amber = 1,
        Red = 2
    }
    export const enum QueryEntityType {
        Subject = 0,
        Group = 1,
        User = 2,
        AllSubjects = 3,
        AllUsers = 4
    }
    export const enum QueryDateRangeType {
        CalendarWeek = 0,
        CalendarMonth = 1,
        CalendarYear = 2,
        Offset = 3,
        Explicit = 4,
        PreviousCalendarWeek = 5,
        PreviousCalendarMonth = 6,
        PreviousCalendarYear = 7,
        Today = 8,
        Yesterday = 9
    }
    export const enum GapStatus {
        Open = 0,
        Closed = 1
    }
    export const enum AggregationType {
        None = 0,
        Count = 1,
        Average = 2,
        Sum = 3,
        Min = 4,
        Max = 5,
        Latest = 6,
        Earliest = 7,
        ValueCount = 8,
        LatestDate = 9,
        EarliestDate = 10,
        StandardDeviation = 11,
        ZScore = 12
    }
    export const enum QueryType {
        MultiSessionSingleEntity = 0,
        MultiSessionSingleAttribute = 1,
        SingleSessionSingleEntity = 2,
        SingleSessionMultiEntity = 3,
        AggregationMultiEntity = 4,
        AggregationSingleEntity = 5
    }
    export const enum SessionEventType {
        Create = 0,
        Update = 1,
        Delete = 2
    }
    export const enum SignedItemType {
      Contact = 0,
      DataItem = 1,
      Attachment = 2
    }
}
module System.Security {
    export const enum SecurityRuleSet {
        None = 0,
        Level1 = 1,
        Level2 = 2
    }
}

module Web.Models {
    export const enum SessionFormat {
        Head = 0,
        Table = 1
    }

    export const enum SessionMode {
        View = 0,
        Edit = 1,
        ReadOnly = 2
    }
}

module DataMining.Queries {
    export const enum ImplicitQueryElementType {
        Template = 0,
        SquadSummary = 1,
        DataItem = 2
    }
}

module Charting {
    export const enum SeriesType {
        Bar = 0,
        Line = 1,
        StepLine = 2,
        Radar = 3,
        Scatter = 4,
        StackedBar = 5,
        Pie = 6
    }
}